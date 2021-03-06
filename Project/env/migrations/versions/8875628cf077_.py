"""empty message

Revision ID: 8875628cf077
Revises: 
Create Date: 2018-10-16 00:46:38.033056

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8875628cf077'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('group',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('domain', sa.String(), nullable=True),
    sa.Column('owner', sa.String(), nullable=True),
    sa.Column('subOwner', sa.String(), nullable=True),
    sa.Column('abstract', sa.String(length=1024), nullable=True),
    sa.Column('groupType', sa.String(), nullable=True),
    sa.Column('researchGroup', sa.Integer(), nullable=True),
    sa.Column('topic', sa.String(length=256), nullable=True),
    sa.ForeignKeyConstraint(['researchGroup'], ['group.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_group_abstract'), 'group', ['abstract'], unique=False)
    op.create_index(op.f('ix_group_domain'), 'group', ['domain'], unique=False)
    op.create_index(op.f('ix_group_groupType'), 'group', ['groupType'], unique=False)
    op.create_index(op.f('ix_group_id'), 'group', ['id'], unique=True)
    op.create_index(op.f('ix_group_name'), 'group', ['name'], unique=True)
    op.create_index(op.f('ix_group_owner'), 'group', ['owner'], unique=False)
    op.create_index(op.f('ix_group_subOwner'), 'group', ['subOwner'], unique=False)
    op.create_index(op.f('ix_group_topic'), 'group', ['topic'], unique=False)
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=64), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=True),
    sa.Column('password_hash', sa.String(length=128), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_user_email'), 'user', ['email'], unique=True)
    op.create_index(op.f('ix_user_username'), 'user', ['username'], unique=True)
    op.create_table('user_profile',
    sa.Column('id', sa.Integer(), nullable=True),
    sa.Column('collegeId', sa.Integer(), nullable=False),
    sa.Column('firstName', sa.String(length=128), nullable=True),
    sa.Column('lastName', sa.String(length=128), nullable=True),
    sa.Column('contact', sa.String(length=128), nullable=True),
    sa.Column('bio', sa.String(length=512), nullable=True),
    sa.Column('interests', sa.String(length=512), nullable=True),
    sa.Column('skills', sa.Text(), nullable=True),
    sa.Column('userType', sa.String(length=128), nullable=True),
    sa.Column('designation', sa.String(length=512), nullable=True),
    sa.Column('cgpa', sa.Integer(), nullable=True),
    sa.Column('researchBody', sa.String(length=256), nullable=True),
    sa.ForeignKeyConstraint(['id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('collegeId')
    )
    op.create_index(op.f('ix_user_profile_bio'), 'user_profile', ['bio'], unique=False)
    op.create_index(op.f('ix_user_profile_cgpa'), 'user_profile', ['cgpa'], unique=True)
    op.create_index(op.f('ix_user_profile_collegeId'), 'user_profile', ['collegeId'], unique=True)
    op.create_index(op.f('ix_user_profile_contact'), 'user_profile', ['contact'], unique=True)
    op.create_index(op.f('ix_user_profile_designation'), 'user_profile', ['designation'], unique=False)
    op.create_index(op.f('ix_user_profile_firstName'), 'user_profile', ['firstName'], unique=False)
    op.create_index(op.f('ix_user_profile_interests'), 'user_profile', ['interests'], unique=False)
    op.create_index(op.f('ix_user_profile_lastName'), 'user_profile', ['lastName'], unique=False)
    op.create_index(op.f('ix_user_profile_researchBody'), 'user_profile', ['researchBody'], unique=False)
    op.create_index(op.f('ix_user_profile_skills'), 'user_profile', ['skills'], unique=False)
    op.create_index(op.f('ix_user_profile_userType'), 'user_profile', ['userType'], unique=False)
    op.create_table('user_to_group',
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('groupId', sa.Integer(), nullable=False),
    sa.Column('role', sa.String(length=20), nullable=True),
    sa.ForeignKeyConstraint(['groupId'], ['group.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['user_profile.id'], ),
    sa.PrimaryKeyConstraint('userId', 'groupId')
    )
    op.create_index(op.f('ix_user_to_group_role'), 'user_to_group', ['role'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_user_to_group_role'), table_name='user_to_group')
    op.drop_table('user_to_group')
    op.drop_index(op.f('ix_user_profile_userType'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_skills'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_researchBody'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_lastName'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_interests'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_firstName'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_designation'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_contact'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_collegeId'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_cgpa'), table_name='user_profile')
    op.drop_index(op.f('ix_user_profile_bio'), table_name='user_profile')
    op.drop_table('user_profile')
    op.drop_index(op.f('ix_user_username'), table_name='user')
    op.drop_index(op.f('ix_user_email'), table_name='user')
    op.drop_table('user')
    op.drop_index(op.f('ix_group_topic'), table_name='group')
    op.drop_index(op.f('ix_group_subOwner'), table_name='group')
    op.drop_index(op.f('ix_group_owner'), table_name='group')
    op.drop_index(op.f('ix_group_name'), table_name='group')
    op.drop_index(op.f('ix_group_id'), table_name='group')
    op.drop_index(op.f('ix_group_groupType'), table_name='group')
    op.drop_index(op.f('ix_group_domain'), table_name='group')
    op.drop_index(op.f('ix_group_abstract'), table_name='group')
    op.drop_table('group')
    # ### end Alembic commands ###
